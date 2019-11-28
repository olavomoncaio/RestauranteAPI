package br.com.springapi.springbootapi.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.springapi.springbootapi.entity.Bebida;
import br.com.springapi.springbootapi.repository.BebidaRepository;

@CrossOrigin
@RestController
@RequestMapping(value = "/bebida")
public class BebidaController {
    @Autowired
    private BebidaRepository _bebidaRepository;

    @GetMapping
    public List<Bebida> Get() {
        return _bebidaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Bebida> GetById(@PathVariable(value = "id") long id) {
        return _bebidaRepository.findById(id);
    }
    

    @PostMapping
    public Bebida Post(@Valid @RequestBody Bebida bebida)
    {
        return _bebidaRepository.save(bebida);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Bebida> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Bebida newBebida)
    {
        Optional<Bebida> oldBebida = _bebidaRepository.findById(id);
        if(oldBebida.isPresent()){
            Bebida bebida = oldBebida.get();
            bebida.setNome(newBebida.getNome());
            bebida.setQuantidade(newBebida.getQuantidade());
            bebida.setPreco(newBebida.getPreco());
            bebida.setDisponivel(newBebida.getDisponivel());
            _bebidaRepository.save(bebida);
            return new ResponseEntity<Bebida>(bebida, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Bebida> bebida = _bebidaRepository.findById(id);
        if(bebida.isPresent()){
            _bebidaRepository.delete(bebida.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}