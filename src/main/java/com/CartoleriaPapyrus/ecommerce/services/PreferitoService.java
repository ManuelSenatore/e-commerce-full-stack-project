package com.CartoleriaPapyrus.ecommerce.services;

import com.CartoleriaPapyrus.ecommerce.entities.Preferito;
import com.CartoleriaPapyrus.ecommerce.entities.Prodotto;
import com.CartoleriaPapyrus.ecommerce.entities.User;
import com.CartoleriaPapyrus.ecommerce.repositories.PreferitoRepository;
import com.CartoleriaPapyrus.ecommerce.utils.RequestModels.PreferitoRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PreferitoService {

    @Autowired
    PreferitoRepository preferitoRepository;

    @Autowired
    ProdottoService prodottoService;

    @Autowired
    UserService userService;

    // CREATE AND SAVE
    public Preferito aggiungiAiPreferiti(PreferitoRequest preferitoRequest) throws Exception {
        Preferito preferito = Preferito.builder()
                .user(userService.getById((long) preferitoRequest.getUserId()))
                .prodotto(prodottoService.getById((long) preferitoRequest.getProdottoId()))
                .createdDate(new Date())
                .build();
        preferitoRepository.save(preferito);
        return preferito;
    }

    // GET PREFERITI FROM USER
    public List<Prodotto> getPreferitiFromUser(Long id) {
        List<Preferito> preferiti = preferitoRepository.findbyUserOrderByCreatedDateDesc(id);
        List<Prodotto> prodotti = new ArrayList<>();

        for (Preferito preferito : preferiti){
            prodotti.add(preferito.getProdotto());
        }
        return prodotti;
    }

    // DELETE ELEMENT FROM PREFERITI
    public void deleteElement(Integer elementoId, User user) throws Exception {
        Optional<Preferito> optionalPreferito = preferitoRepository.findById(Long.valueOf(elementoId));


        if(optionalPreferito.isEmpty()){
            throw new Exception( "Elemento non trovato");
        }
        Preferito pref = optionalPreferito.get();

        if(pref.getUser() != user){
            throw new Exception( "Utente non trovato");
        }
        preferitoRepository.delete(pref);
    }
}
