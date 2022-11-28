package com.CartoleriaPapyrus.ecommerce.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "prodotti")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class Prodotto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String nome;
    private double prezzo;
    private String immagineUrl;
    private String descrizione;
    private Categoria categoria;
    private Disponibilita disponibilita;

}
