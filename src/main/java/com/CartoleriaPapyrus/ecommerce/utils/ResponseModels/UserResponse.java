package com.CartoleriaPapyrus.ecommerce.utils.ResponseModels;

import com.CartoleriaPapyrus.ecommerce.entities.Indirizzo;
import com.CartoleriaPapyrus.ecommerce.entities.Role;
import com.CartoleriaPapyrus.ecommerce.entities.User;
import lombok.*;

import java.util.List;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserResponse {
    private Long id;
    private String nomeCompleto;
    private String email;
    private String username;
    private Set<Role> roles;
    private List<Indirizzo> indirizzi;

    public static UserResponse parseUser( User user ) {

        return UserResponse.builder()
                .id( user.getId() )
                .nomeCompleto( user.getNomeCompleto() )
                .email( user.getEmail() )
                .username( user.getUsername() )
                .roles( user.getRoles() )
                .build();
    }
}
