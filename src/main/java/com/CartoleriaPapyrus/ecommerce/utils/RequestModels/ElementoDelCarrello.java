package com.CartoleriaPapyrus.ecommerce.utils.RequestModels;

import com.CartoleriaPapyrus.ecommerce.entities.Carrello;
import com.CartoleriaPapyrus.ecommerce.entities.Prodotto;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ElementoDelCarrello {
    private Long id;
    private Integer quantity;
    private Prodotto prodotto;

    public ElementoDelCarrello(Carrello carrello) {
        this.id = carrello.getId();
        this.quantity = carrello.getQuantity();
        this.setProdotto(carrello.getProdotto());
    }
}
