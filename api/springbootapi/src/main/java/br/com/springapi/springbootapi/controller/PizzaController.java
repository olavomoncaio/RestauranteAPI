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

import br.com.springapi.springbootapi.entity.Pizza;
import br.com.springapi.springbootapi.repository.PizzaRepository;

@RestController
public class PizzaController {
    @Autowired
    private PizzaRepository _pizzaRepository;

    @CrossOrigin
    @RequestMapping(value = "/pizza", method = RequestMethod.GET)
    public List<Pizza> Get() {
        return _pizzaRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping(value = "/pizza/{id}", method = RequestMethod.GET)
    public ResponseEntity<Pizza> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Pizza> pizza = _pizzaRepository.findById(id);
        if(pizza.isPresent())
            return new ResponseEntity<Pizza>(pizza.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @RequestMapping(value = "/pizza", method =  RequestMethod.POST)
    public Pizza Post(@Valid @RequestBody Pizza pizza)
    {
        return _pizzaRepository.save(pizza);
    }

    @CrossOrigin
    @RequestMapping(value = "/pizza/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Pizza> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Pizza newPizza)
    {
        Optional<Pizza> oldPizza = _pizzaRepository.findById(id);
        if(oldPizza.isPresent()){
            Pizza pizza = oldPizza.get();
            pizza.setNome(newPizza.getNome());
            _pizzaRepository.save(pizza);
            return new ResponseEntity<Pizza>(pizza, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @RequestMapping(value = "/pizza/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Pizza> pizza = _pizzaRepository.findById(id);
        if(pizza.isPresent()){
            _pizzaRepository.delete(pizza.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}