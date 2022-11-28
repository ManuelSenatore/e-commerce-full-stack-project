package com.CartoleriaPapyrus.ecommerce.repositories;

import com.CartoleriaPapyrus.ecommerce.entities.Preferito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PreferitoRepository extends JpaRepository<Preferito, Long> {

    @Query(
            value = "select p from Preferito p where p.user.id = :id order by p.createdDate desc"
    )
    List<Preferito> findbyUserOrderByCreatedDateDesc(@Param("id") Long id);

}
