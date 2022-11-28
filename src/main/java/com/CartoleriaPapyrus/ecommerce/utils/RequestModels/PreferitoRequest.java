package com.CartoleriaPapyrus.ecommerce.utils.RequestModels;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class PreferitoRequest {
    private Integer userId;
    private Integer prodottoId;

}
