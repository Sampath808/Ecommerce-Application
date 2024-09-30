package com.ecommerce.react_application_spring.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.ecommerce.react_application_spring.Model.OrderItems;

@Repository
public interface OrderItemsRepository extends JpaRepository<OrderItems,Long>{
    // @Query("from OrderItems o where o.order.id = :id")
    // public List<OrderItems> getOrderItemByOrderId(@Param("id") Long id);
}
