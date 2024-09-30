package com.ecommerce.react_application_spring.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.ecommerce.react_application_spring.Model.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders,Long>{
    @Query("from Orders o where o.customer.id = :id")
    public List<Orders> getOrdersByCustomerId(@Param("id") Long id);
}
