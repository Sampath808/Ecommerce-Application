package com.ecommerce.react_application_spring.Repository;

import com.ecommerce.react_application_spring.Model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long>{

 
    @Query("from Cart c where c.customer.id = :id")
    public List<Cart> getCartItemsByCustomerId(@Param("id") Long id);


}