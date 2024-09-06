package com.ecommerce.react_application_spring.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ecommerce.react_application_spring.Model.Customers;
@Repository
public interface CustomersRepository extends JpaRepository<Customers,Long> {
    Optional<Customers> findByEmail(String email);
    Optional<Customers> findByUserName(String userName);
    Optional<Customers> findByPhoneNo(String phoneNo);


}
