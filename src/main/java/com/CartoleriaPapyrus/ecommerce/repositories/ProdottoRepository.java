package com.CartoleriaPapyrus.ecommerce.repositories;

import com.CartoleriaPapyrus.ecommerce.entities.Categoria;
import com.CartoleriaPapyrus.ecommerce.entities.Prodotto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdottoRepository extends JpaRepository<Prodotto, Long> {

    @Query(
            value = "select p from Prodotto p where p.categoria = :categoria"
    )
    List<Prodotto> findProdottoByCategoria(@Param("categoria") Categoria categoria);
}
