package com.Zenyoga.web.dto.response;

import com.Zenyoga.web.constant.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long uid;
    private String name;
    private String email;
    private Boolean isEnabled;
    private Role role;
    private Long phone;    
    private String address;
}
