package com.CartoleriaPapyrus.ecommerce.utils.RequestModels;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CarrelloRequest {
    private List<ElementoDelCarrello> cartItems;
    private double totalCost;
}
