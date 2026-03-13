package com.TodoList.TodoList.utils;

import java.security.Key;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
    
    @Value("${jwt.expiration}")
    private long expirationMs;

    @Value("${jwt.secret}")
    private String secret;
    private Key getSigningKey(){
        return Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateToken(Integer userId ){
        return Jwts.builder()
                .setSubject(userId.toString())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() * expirationMs))
                .signWith(getSigningKey())
                .compact();
    }
    
    public Integer extractId(String token){
        String subject = Jwts.parserBuilder()
                            .setSigningKey(getSigningKey())
                            .build()
                            .parseClaimsJws(token)
                            .getBody()
                            .getSubject();
        return Integer.parseInt(subject);
    }
    
    public boolean validateToken(String token, Integer id){
        final Integer tokenId = extractId(token);
        return(tokenId.equals(id) && !isTokenExpire(token));
    }

    private boolean isTokenExpire(String token){
        Date expiration = Jwts.parserBuilder()
                            .setSigningKey(getSigningKey())
                            .build()
                            .parseClaimsJws(token)
                            .getBody()
                            .getExpiration();
        
        return expiration.before(new Date());
    }
}
