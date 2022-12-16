package com.CartoleriaPapyrus.ecommerce.utils.RequestModels;

import com.sun.istack.NotNull;
import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UpdateQuantityRequest {

        private Integer quantity;
}
