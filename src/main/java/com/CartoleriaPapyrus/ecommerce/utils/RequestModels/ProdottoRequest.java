package com.CartoleriaPapyrus.ecommerce.utils.RequestModels;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ProdottoRequest {
    private String nome;
    private double prezzo;
    private String immagineUrl;
    private String descrizione;
    private String categoria;
    private String disponibilita;
}
