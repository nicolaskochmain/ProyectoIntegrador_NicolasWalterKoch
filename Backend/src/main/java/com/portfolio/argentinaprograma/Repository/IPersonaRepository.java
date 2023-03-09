package com.portfolio.argentinaprograma.Repository;

import com.portfolio.argentinaprograma.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends
        JpaRepository<Persona, Long> {
    
}
