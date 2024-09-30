package com.ecommerce.react_application_spring.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.react_application_spring.Model.Products;

@Repository
public interface ProductsRepository extends JpaRepository<Products,Long>{
    
}
