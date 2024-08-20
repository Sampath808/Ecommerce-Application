package com.ecommerce.react_application_spring.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.react_application_spring.Model.Customers;

public interface CustomersRepository extends JpaRepository<Customers,Integer> {
    
}
