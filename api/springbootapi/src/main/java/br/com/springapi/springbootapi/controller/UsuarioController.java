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

import br.com.springapi.springbootapi.entity.Usuario;
import br.com.springapi.springbootapi.repository.UsuarioRepository;

@RestController
public class UsuarioController {
    @Autowired
    private UsuarioRepository _usuarioRepository;

    @CrossOrigin
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public List<Usuario> Get() {
        return _usuarioRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping(value = "/login/{id}", method = RequestMethod.GET)
    public ResponseEntity<Usuario> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Usuario> usuario = _usuarioRepository.findById(id);
        if(usuario.isPresent())
            return new ResponseEntity<Usuario>(usuario.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @RequestMapping(value = "/login", method =  RequestMethod.POST)
    public Usuario Post(@Valid @RequestBody Usuario usuario)
    {
        return _usuarioRepository.save(usuario);
    }

    @CrossOrigin
    @RequestMapping(value = "/login/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Usuario> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Usuario newUsuario)
    {
        Optional<Usuario> oldUsuario = _usuarioRepository.findById(id);
        if(oldUsuario.isPresent()){
            Usuario usuario = oldUsuario.get();
            usuario.setNome(newUsuario.getNome());
            _usuarioRepository.save(usuario);
            return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @RequestMapping(value = "/login/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Usuario> usuario = _usuarioRepository.findById(id);
        if(usuario.isPresent()){
            _usuarioRepository.delete(usuario.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}