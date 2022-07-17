package com.tcc.professionalOfTheMonth.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tcc.professionalOfTheMonth.commons.GenericController;
import com.tcc.professionalOfTheMonth.domains.Mural;
import com.tcc.professionalOfTheMonth.domains.MuralItem;
import com.tcc.professionalOfTheMonth.dto.MuralItemSequenceDTO;
import com.tcc.professionalOfTheMonth.service.MuralItemService;

@RestController
@RequestMapping(value="/muralItem")
public class MuralItemController extends GenericController<MuralItem, Long, MuralItemService>{
	
	private MuralItemService muralItemService;
	
	public MuralItemController(MuralItemService muralItemService) {
		super(muralItemService);
		this.muralItemService = muralItemService;
	}
	
	@PatchMapping(path = "/updateSequence/{idMural}")
	public ResponseEntity<List<MuralItem>> updateSequence(@RequestBody @Valid List<MuralItemSequenceDTO> listMuralItems , @PathVariable Long idMural){
		
		Optional<List<MuralItem>> listMuralItemsOptional = muralItemService.findByMural(new Mural(idMural));
		
		if(listMuralItemsOptional.isPresent()){
			
			List<MuralItem> listItems = listMuralItemsOptional.get();
			
			if(listMuralItems.size() == listItems.size()) {
				
				List<MuralItem> listMuralItemUpdate = new ArrayList<MuralItem>();
				
				for(MuralItemSequenceDTO muralItemSeq : listMuralItems){
					
					MuralItem muralItemSequence = new MuralItem(muralItemSeq.getId());
					if(listItems.contains(muralItemSequence)){
						
						int muralIndex = listItems.indexOf(muralItemSequence);
						
						if(muralIndex > 0) {
							MuralItem muralItem = listItems.get(muralIndex);
							muralItem.setSequence(muralItemSeq.getSequence());
							listMuralItemUpdate.add(muralItem);
						}else {
							return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
						}
						
					}else {
						return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
					}
					
				}
				
				muralItemService.updateList(listMuralItemUpdate);
				return new ResponseEntity<>(listMuralItemUpdate, HttpStatus.OK);	
			}else{
	    		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping(path = "{id}")
    public ResponseEntity<MuralItem> update(@RequestBody @Valid MuralItem newObj , @PathVariable Long id) {
		
		Optional<MuralItem> opt = muralItemService.findById(id);
    	
    	if(opt.isPresent()
    			&& newObj.getMural() != null
    			&& newObj.getMural().getId() != null
    			&& newObj.getMural().getId().equals(opt.get().getMural().getId())) {
    		
    		MuralItem muralItem = opt.get();
    		muralItem.setTitle(newObj.getTitle());
    		muralItem.setDescription(newObj.getDescription());
    		muralItemService.save(muralItem);
    		return new ResponseEntity<>(muralItem, HttpStatus.OK);
    	} else if(opt.isPresent()) {
    		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    	} else {
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	}
    }
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler
	public Map<String, String> hundleValidationException(MethodArgumentNotValidException ex){
		
		Map<String, String> errors = new HashMap<>();
		
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError)error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});
		
		return errors;
	}
}
