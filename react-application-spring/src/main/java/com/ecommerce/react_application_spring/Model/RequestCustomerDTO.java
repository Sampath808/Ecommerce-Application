package com.ecommerce.react_application_spring.Model;

public class RequestCustomerDTO {
    private String email;
    private String password;
    
    public RequestCustomerDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
}
