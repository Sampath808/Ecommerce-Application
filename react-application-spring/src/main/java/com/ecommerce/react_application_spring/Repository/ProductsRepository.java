package com.ecommerce.react_application_spring.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.react_application_spring.Model.Products;

public interface ProductsRepository extends JpaRepository<Products,Long>{
    
}
