import React from "react";

function Contact({ addToRefs }: any, ref: any) {
  return (
    <section id="contact" ref={ addToRefs } className="flex max-lg:flex-col justify-center items-center px-[34px] gap-4 w-full">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-3xl lg:text-4xl">Entre em contato!</h2>
        <p className="text-lg">
          Estou sempre olhando para novas oportunidade e disponivel para contato.
          <br />
          Se tiver alguma pergunta ou precisar entrar em contato, vou responder mais breve possível!
        </p>
      </div>
      <div className="flex flex-col max-lg:w-full gap-2">
        <a href="mailto:nasc.matheusfrancisco@gmail.com" target="_blank" className="w-full h-[44px] bg-gradient-to-l from-lightBlue to-purple rounded-full flex justify-center items-center text-xl lg:px-16">
          enviar e-mail!
        </a>
        <a href="https://api.whatsapp.com/send?phone=5532998027268" target="_blank" className="w-full h-[44px] bg-gradient-to-l from-lightBlue to-purple rounded-full flex justify-center items-center text-xl">
          enviar whatsapp!
        </a>
      </div>
    </section>
  )
}

const forwardContact = React.forwardRef(Contact);

export default forwardContact;
