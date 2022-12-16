package com.CartoleriaPapyrus.ecommerce.services;

import com.CartoleriaPapyrus.ecommerce.entities.Role;
import com.CartoleriaPapyrus.ecommerce.entities.RoleType;
import com.CartoleriaPapyrus.ecommerce.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    RoleRepository repository;

    public Role getById(Long id) throws Exception {
        Optional<Role> ba = repository.findById(id);
        if ( ba.isEmpty() )
            throw new Exception("Role not available");
        return ba.get();
    }

    public Role getByRole( RoleType roleType) throws Exception {
        Optional<Role> ba = repository.findByRoleType(roleType);
        if ( ba.isEmpty() )
            throw new Exception("Role not available");
        return ba.get();
    }

    public List<Role> getAll() {
        return repository.findAll();
    }

    // CREATE
    public Role save( Role x) {
        return repository.save(x);
    }

    // DELETE
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
