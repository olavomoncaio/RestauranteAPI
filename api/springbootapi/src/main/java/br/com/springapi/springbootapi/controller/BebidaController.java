package br.com.springapi.springbootapi.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.springapi.springbootapi.entity.Bebida;
import br.com.springapi.springbootapi.repository.BebidaRepository;

@RestController
public class BebidaController {
    @Autowired
    private BebidaRepository _bebidaRepository;

    @CrossOrigin
    @RequestMapping(value = "/bebida", method = RequestMethod.GET)
    public List<Bebida> Get() {
        return _bebidaRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping(value = "/bebida/{id}", method = RequestMethod.GET)
    public ResponseEntity<Bebida> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Bebida> bebida = _bebidaRepository.findById(id);
        if(bebida.isPresent())
            return new ResponseEntity<Bebida>(bebida.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @RequestMapping(value = "/bebida", method =  RequestMethod.POST)
    public Bebida Post(@Valid @RequestBody Bebida bebida)
    {
        return _bebidaRepository.save(bebida);
    }

    @CrossOrigin
    @RequestMapping(value = "/bebida/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Bebida> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Bebida newBebida)
    {
        Optional<Bebida> oldBebida = _bebidaRepository.findById(id);
        if(oldBebida.isPresent()){
            Bebida bebida = oldBebida.get();
            bebida.setNome(newBebida.getNome());
            _bebidaRepository.save(bebida);
            return new ResponseEntity<Bebida>(bebida, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @RequestMapping(value = "/bebida/{id}", method = RequestMethod.DELETE)
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