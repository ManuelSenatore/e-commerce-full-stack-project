package com.CartoleriaPapyrus.ecommerce.utils.RequestModels;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CheckoutRequest {
    private String productName;
    private int quantity;
    private double price;
    private long productId;
    private long userId;

}
