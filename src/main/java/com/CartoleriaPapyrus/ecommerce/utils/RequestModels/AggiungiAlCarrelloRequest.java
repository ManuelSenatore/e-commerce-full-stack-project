package com.CartoleriaPapyrus.ecommerce.utils.RequestModels;

import com.sun.istack.NotNull;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class AggiungiAlCarrelloRequest {
    private @NotNull Integer userId;
    private @NotNull Integer prodottoId;
    private @NotNull Integer quantity;
}
