package com.ecommerce.react_application_spring.Model;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class Customers implements UserDetails  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userName;
    private String phoneNo;
    private String email;
    private String password;
    private String state;

    @CreationTimestamp
    @Column(updatable = false, name = "created_at")
    private Date createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Date updatedAt;

    @Override
    public java.util.Collection<? extends GrantedAuthority> getAuthorities() {
        return java.util.List.of();
    }
    //this method belongs to UserDetails interface 
    @Override
    public String getUsername() {
       return email;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Customers(String userName, String phoneNo, String email, String password, String state) {
        this.userName = userName;
        this.phoneNo = phoneNo;
        this.email = email;
        this.password = password;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
    @Override
    public String toString() {
        return "Customers [id=" + id + ", userName=" + userName + ", phoneNo=" + phoneNo + ", email=" + email
                + ", password=" + password + ", state=" + state + ", createdAt=" + createdAt + ", updatedAt="
                + updatedAt + ", isAccountNonExpired()=" + isAccountNonExpired() + ", isAccountNonLocked()="
                + isAccountNonLocked() + ", isCredentialsNonExpired()=" + isCredentialsNonExpired() + "]";
    }    
    
}
