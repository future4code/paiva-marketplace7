import React from "react";
import UserPage from '../pages/UserPage/UserPage';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from "@chakra-ui/react";

export default function Informacoes(props) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg="#7660C3"
          color="#FFFFFF"
          _hover={{ bg: "" }}
          marginTop="25px"
        >
          Saiba Mais
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>{props.categoria}</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <p>Descrição:</p>
            <p>Preço:</p>
            <p>Método de Pagamento:</p>
            <p>Parcelamento:</p>
          </PopoverBody>
          <PopoverFooter>
            <Button
              onClick={()=>props.contratar(props.servicoId)}
              bg="#7660C3"
              color="#FFFFFF"
              _hover={{ bg: "" }}
              marginTop="25px"
            >Contratar
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}