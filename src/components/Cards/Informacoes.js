
import React from "react";
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
            <p>Descrição: </p>
            <p>Preço:</p>
            <p>Método de Pagamento: </p>
            <p>Parcelamento: x</p>
          </PopoverBody>
          <PopoverFooter>
            <Button
              // onClick={() => this.props.add(servico.id)}// this.props.add        testar pra ver se está funcionando - micheline
              bg="#7660C3"
              color="#FFFFFF"
              _hover={{ bg: "" }}
              marginTop="25px"
            >
              Adicionar ao Carrinho
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}