package com.CartoleriaPapyrus.ecommerce.utils.ResponseModels;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class StripeResponse {
    private String sessionId;
}
