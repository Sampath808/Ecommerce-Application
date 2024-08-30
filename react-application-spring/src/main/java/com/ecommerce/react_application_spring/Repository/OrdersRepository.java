package com.ecommerce.react_application_spring.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.react_application_spring.Model.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders,Long>{
    
}
