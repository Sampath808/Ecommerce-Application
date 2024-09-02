package com.ecommerce.react_application_spring.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;

@Entity
public class Customers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // @NotBlank
    // @Size(min = 1, message = "is required")
    private String userName;
    // @Pattern(regexp = "^[0-9]{10}",message = "enter a valid phone number")
    private String phoneNo;
    // @Email(message="enter a valid e-mail")
    private String email;
    // @Size(min = 8, message = "is required")
    private String newPassword;
    private String state;

    public Customers(String userName, String phoneNo, String email, String newPassword, String state) {
        this.userName = userName;
        this.phoneNo = phoneNo;
        this.email = email;
        this.newPassword = newPassword;
        this.state = state;
    }

    public Customers() {

    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", phoneNo='" + phoneNo + '\'' +
                ", email='" + email + '\'' +
                ", newPassword='" + newPassword + '\'' +
                ", state='" + state + '\'' +
                '}';
    }
}
