package com.CartoleriaPapyrus.ecommerce.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ordini")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Ordine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToMany
    @JoinTable(name = "ordine_prodotti", //Nome della tabella che verrà creata
            joinColumns = @JoinColumn(name = "ordine_id"),// Crea colonna
            inverseJoinColumns = @JoinColumn(name = "prodotto_id"))
    @ToString.Exclude
    private List<Prodotto> prodotto;
    @ManyToOne
    @JoinColumn(name = "indirizzo_id")
    private Indirizzo indirizzo;
}
