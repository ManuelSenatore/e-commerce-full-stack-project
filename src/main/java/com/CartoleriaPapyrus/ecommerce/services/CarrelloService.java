package com.CartoleriaPapyrus.ecommerce.services;

import com.CartoleriaPapyrus.ecommerce.entities.Carrello;
import com.CartoleriaPapyrus.ecommerce.entities.User;
import com.CartoleriaPapyrus.ecommerce.repositories.CarrelloRepository;
import com.CartoleriaPapyrus.ecommerce.utils.RequestModels.AggiungiAlCarrelloRequest;
import com.CartoleriaPapyrus.ecommerce.utils.RequestModels.CarrelloRequest;
import com.CartoleriaPapyrus.ecommerce.utils.RequestModels.ElementoDelCarrello;
import com.CartoleriaPapyrus.ecommerce.utils.RequestModels.UpdateQuantityRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CarrelloService {
    
    @Autowired
    CarrelloRepository carrelloRepository;

    @Autowired
    ProdottoService prodottoService;

    @Autowired
    UserService userService;



    // CREATE AND SAVE
    public Carrello aggiungiAlCarrello(AggiungiAlCarrelloRequest aggiungiAlCarrelloRequest) throws Exception {
        Carrello carrello = Carrello.builder()
                .user(userService.getById((long) aggiungiAlCarrelloRequest.getUserId()))
                .prodotto(prodottoService.getById((long) aggiungiAlCarrelloRequest.getProdottoId()))
                .quantity(aggiungiAlCarrelloRequest.getQuantity())
                .createdDate(new Date())
                .build();
        carrelloRepository.save(carrello);
        return carrello;
    }

    // GET CARRELLO FROM USER
    public CarrelloRequest getAllElements(Long id) {
       List<Carrello> listaCarrello = carrelloRepository.findbyUserOrderByCreatedDateDesc(id);

       List<ElementoDelCarrello> elementoDelCarrello = new ArrayList<>();
       double totalCost = 0;

       for(Carrello carrello : listaCarrello) {
            ElementoDelCarrello elementoDelCarr = new ElementoDelCarrello(carrello);
            totalCost += elementoDelCarr.getQuantity() * carrello.getProdotto().getPrezzo();
            elementoDelCarrello.add(elementoDelCarr);
       }
       CarrelloRequest carr = new CarrelloRequest();
       carr.setTotalCost(totalCost);
       carr.setCartItems(elementoDelCarrello);
       return carr;
    }

    // DELETE ELEMENT FROM LIST
    public void deleteElement(Integer elementoId, User user) throws Exception {
        Optional<Carrello> optionalCarrello = carrelloRepository.findById(Long.valueOf(elementoId));
        if(optionalCarrello.isEmpty()){
            throw new Exception( "Elemento non trovato" );
        }
        Carrello carr = optionalCarrello.get();
        if(carr.getUser() != user){
            throw new Exception( "Utente non trovato");
        }
        carrelloRepository.delete(carr);
    }

    public Carrello update(UpdateQuantityRequest updateQuantityRequest, Long id) throws Exception {
        Optional<Carrello> carrFind = carrelloRepository.findById(id);
        if (carrFind.isPresent()) {
            Carrello carrello = Carrello.builder()
                    .id(carrFind.get().getId())
                    .user(carrFind.get().getUser())
                    .prodotto(carrFind.get().getProdotto())
                    .createdDate(carrFind.get().getCreatedDate())
                    .quantity(updateQuantityRequest.getQuantity())
                    .build();
            carrelloRepository.save(carrello);
            return carrello;
        }else{
            throw new Exception( "Elemento non trovato" );
        }

    }
}
