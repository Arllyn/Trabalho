import React from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Heading,
  Button,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Divider,
} from "@chakra-ui/react";
import imgdevs from "./images/imgdevs.png";
import doutoradevs from "./images/doutoradevs.png";
import pcdevs from "./images/pcdevs.png";
import devsdevs from "./images/devsdevs.png";
import tesouradev from "./images/tesouradev.png";
import relogiodev from "./images/relogiodev.png";
import livrodev from "./images/livrodev.png";
import quadrado from "./images/quadrado.png";
import devsorri from "./images/devsorri.png";
import pcdev from "./images/pcdev.png";
import jobdev from "./images/jobdev.png";
function Ultpage({ clean, desc, title, width, high, img, reverse, marginb }) {
  return (
    <Box
      display={clean}
      rounded='md'
      w={{ base: "348px", md: "580px" }}
      p={{ base: "16px 16px", md: "16px 24px" }}
      border='4px solid #163560'
    >
      <Text
        mb={marginb}
        fontSize={{ base: "14px", md: "24px" }}
        fontStyle='italic'
        color='#163560'
      >
        {desc}
      </Text>
      <Flex
        mb={{ base: "54px", md: "80px" }}
        w={{ base: "316px", md: "532px" }}
        alignItems='center'
        justifyContent={{ base: "none", md: "space-between" }}
        flexDir={reverse}
      >
        <Heading
          w='251px'
          color='#163560'
          fontSize={{ base: "16px", md: "28px" }}
        >
          {title}
        </Heading>
        <Image w={width} h={high} src={img} />
      </Flex>
      <Flex justifyContent='space-between' w={{ base: "314px", md: "546px" }}>
        <Image w='34px' h='42px' src={imgdevs} />
        <Text w='241px' fontSize='14px' color='#163560'>
          Conheça mais sobre nossa plataforma www.devsacreditar.com.br/devakinha
        </Text>
      </Flex>
    </Box>
  );
}

function Faqpage({ title, desc }) {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Box>
      <Accordion allowMultiple>
        <AccordionItem rounded='md' boxShadow='md'>
          <AccordionButton
            w={{ base: "100%", md: "1280px" }}
            onClick={handleToggle}
          >
            <Text color='#0B0755' fontSize={{ base: "12px", md: "24px" }}>
              {title}
            </Text>
          </AccordionButton>
          <Divider />
          <AccordionPanel w={{ base: "100%", md: "1280px" }}>
            <Text
              fontSize={{ base: "12px", md: "20px" }}
              color='#2F2E41'
              w={{ base: "100%", md: "800px" }}
              textAlign='left'
            >
              {desc}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
function P4({ desc, desc1, reverse }) {
  return (
    <Flex>
      <Flex
        display={{ base: "flex", md: "flex" }}
        flexDir={reverse}
        h={{ base: "233px", md: "207px" }}
        w={{ base: "338px", md: "1040px" }}
        justifyContent='space-between'
        alignItems={{ base: "center", md: "none" }}
        mt={{ base: "24px", md: "80px" }}
      >
        <Flex
          w={{ base: "100px", md: "200px" }}
          h={{ base: "100px", md: "207px" }}
        >
          <Image src={devsorri} />
        </Flex>
        <Flex
          border='1px solid #0B0755'
          w={{ base: "338px", md: "808px" }}
          h={{ base: "124px", md: "207px" }}
          justifyContent='space-between'
          flexDir='column'
          bgColor='#FFFFFF'
          p={{ base: "14px 16px", md: "32px 32px" }}
        >
          <Text
            fontSize={{ base: "14px", md: "24px" }}
            fontStyle='italic'
            w={{ base: "265px", md: "456px" }}
            color='#000000'
          >
            {desc}
          </Text>

          <Text
            fontSize={{ base: "14px", md: "24px" }}
            fontStyle='italic'
            color='#0B0755'
            textAlign='end'
          >
            {desc1}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
function Item2({
  title,
  bgColor,
  fontColor,
  desc1,
  desc2,
  desc3,
  desc4,
  bgColorButton,
  fontColorButton,
  img,
  preco,
}) {
  return (
    <Box>
      <Flex
        alignItems='center'
        justifyContent='center'
        w='340px'
        backgroundColor={bgColor}
        mb={{ base: "16px", md: "none" }}
      >
        <Flex mb='52px' mt='32px' w='288px' h='465px'>
          <Flex
            justifyContent='space-between'
            flexDir='column'
            alignItems='center'
          >
            <Image src={img} w='100px' h='100px' />
            <Heading fontSize='24px' color={fontColor}>
              {title}
            </Heading>
            <Text fontSize='24px' color={fontColor}>
              {preco}
            </Text>
            <Flex w='288px' border='1px solid #AEC3FF' />
            <Flex flexDir='column' alignItems='center'>
              <Text fontSize='18px' color={fontColor}>
                {desc1}
              </Text>
              <Text fontSize='18px' color={fontColor}>
                {desc2}
              </Text>
              <Text fontSize='18px' color={fontColor}>
                {desc3}
              </Text>
              <Text fontSize='18px' color={fontColor}>
                {desc4}
              </Text>
              <Button
                fontSize={{ base: "16px", md: "24px" }}
                mt='40px'
                color={fontColorButton}
                backgroundColor={bgColorButton}
                w='203px'
                h={{ base: "35px", md: "68px" }}
              >
                Assinar
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
function Item({ icon, title, desc, mt }) {
  return (
    <Flex mt={mt}>
      <Image
        h={{ base: "20px", md: "62px" }}
        w={{ base: "22px", md: "65px" }}
        src={icon}
      />
      <Flex ml={{ base: "19px", md: "34px" }} flexDir='column'>
        <Heading
          mb={{ base: "8px", md: "0px" }}
          fontSize={{ base: "14", md: "24px" }}
          color='#0B0755'
        >
          {title}
        </Heading>
        <Text
          w={{ base: "100%", md: "433px" }}
          textAlign='justify'
          fontSize={{ base: "14px", md: "18px" }}
          color='#0B0755'
        >
          {desc}
        </Text>
      </Flex>
    </Flex>
  );
}
function BoxItem({ desc, title }) {
  return (
    <Flex
      w='225px'
      h={{ base: "320px", md: "329px" }}
      p='33px 16px'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      backgroundColor='#FFFFFF'
      mb={{ base: "16px", md: "none" }}
    >
      <Image mx='auto' src={pcdevs} mb='16px' />
      <Heading color='#0B0755' fontSize='16px' mb='16px'>
        {title}
      </Heading>
      <Text color='#0B0755' fontSize='14px' textAlign='justify' w='193px'>
        {desc}
      </Text>
    </Flex>
  );
}
function Home() {
  return (
    <Box>
      <Box w={{ base: "100%", md: "1280px 100%" }} bgColor='#F4F7FD'>
        <Flex
          display={{ base: "block", md: "flex" }}
          w={{ base: "242px", md: "1280px" }}
          alignItems='center'
          justifyContent='space-between'
          p={{ base: "none", md: "51px 68px" }}
          mx='auto'
        >
          <Flex w={{ base: "234px", md: "423px" }} flexDir='column'>
            <Image
              w={{ base: "18px", md: "68px" }}
              h={{ base: "18px", md: "82px" }}
              mb={{ base: "8px", md: "56px" }}
              src={imgdevs}
              mt={{ base: "8px", md: "0px" }}
            />
            <Heading
              color='#0B0755'
              fontSize={{ base: "18px", md: "40px" }}
              w={{ base: "234px", md: "423px" }}
            >
              Suporte Psicológico para Pessoas de Tecnologia
            </Heading>
            <Text
              mt={{ base: "8px", md: "51px" }}
              fontSize={{ base: "12px", md: "24px" }}
              color='#0B0755'
            >
              Mantenha sua saúde mental bem cuidada
            </Text>
            <Image
              display={{ base: "flex", md: "none" }}
              w={{ base: "271px", md: "644px" }}
              h={{ base: "173px", md: "489px" }}
              src={doutoradevs}
            />
            <Button
              mt={{ base: "18px", md: "24px" }}
              w={{ base: "232px", md: "423px" }}
              h={{ base: "35px", md: "68px" }}
              fontSize={{ base: "16px", md: "24px" }}
              backgroundColor='#186F45'
              color='#FFFFFF'
              mb={{ base: "16px", md: "0px" }}
            >
              Comece a cuidar de você!
            </Button>
          </Flex>
          <Flex>
            <Image
              display={{ base: "none", md: "flex" }}
              w={{ base: "271px", md: "644px" }}
              h={{ base: "173px", md: "489px" }}
              src={doutoradevs}
            />
          </Flex>
        </Flex>
      </Box>
      <Box backgroundColor='#E5E5E5'>
        <Flex
          alignItems='center'
          p={{ base: "24px 24px", md: "45px 142px" }}
          flexDir='column'
        >
          <Heading
            textAlign='center'
            fontSize={{ base: "18px", md: "32px" }}
            color='#0B0755'
            mb={{ base: "16px", md: "41px" }}
          >
            O que é o plano de suporte psicológico?
          </Heading>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent='space-between'
            w={{ base: "225px", md: "972px" }}
            alignItems='center'
          >
            <BoxItem
              title='Atendimento online'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac
        ullamcorper eu arcu elementum mollis arcu enim a elementum at mauris.'
            />
            <BoxItem
              title='Atendimento online'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac
        ullamcorper eu arcu elementum mollis arcu enim a elementum at mauris.'
            />
            <BoxItem
              title='Atendimento online'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac
        ullamcorper eu arcu elementum mollis arcu enim a elementum at mauris.'
            />
            <BoxItem
              title='Atendimento online'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ac
        ullamcorper eu arcu elementum mollis arcu enim a elementum at mauris.'
            />
          </Flex>
        </Flex>
      </Box>

      <Box
        p={{ base: "24px 24px", md: "32px 32px" }}
        alignItems='center'
        backgroundColor='#F4F7FD'
      >
        <Box>
          <Heading
            textAlign='center'
            color='#0B0755'
            fontSize={{ base: "18px", md: "32px" }}
          >
            Quais os principais benefícios?
          </Heading>
        </Box>

        <Flex
          mb={{ base: "24px", md: "0px" }}
          w={{ base: "100%", md: "1280px" }}
          mt={{ base: "12px", md: "80px" }}
          flexDir={{ base: "column-reverse", md: "row" }}
          alignItems='center'
          justifyContent={{ base: "center", md: "space-between" }}
          mx='auto'
        >
          <Image
            mt={{ base: "16px", md: "0px" }}
            w={{ base: "194px", md: "586px" }}
            h={{ base: "203px", md: "624px" }}
            src={devsdevs}
          />
          <Flex
            w={{ base: "100%", md: "532px" }}
            justifyContent='space-between'
            flexDir='column'
          >
            <Item
              mt={{ base: "32px", md: "0px" }}
              icon={livrodev}
              title='Transparência'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet tellus lacus dictum. Amet, et sed quis turpis morbi. Mollis nulla tempor scelerisque viverra nunc. '
            />
            <Item
              mt={{ base: "16px", md: "80px" }}
              icon={relogiodev}
              title='Economia'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet tellus lacus dictum. Amet, et sed quis turpis morbi. Mollis nulla tempor scelerisque viverra nunc. '
            />
            <Item
              mt={{ base: "16px", md: "80px" }}
              icon={tesouradev}
              title='De acordo com sua necessidade'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet tellus lacus dictum. Amet, et sed quis turpis morbi. Mollis nulla tempor scelerisque viverra nunc. '
            />
          </Flex>
        </Flex>
        <Flex
          alignItems='center'
          flexDir='column'
          justifyContent='center'
          mt={{ base: "0px", md: "142px" }}
          mb={{ base: "21px", md: "53px" }}
        >
          <Button
            display={{ base: "none", md: "flex" }}
            w={{ base: "232px", md: "440px" }}
            h={{ base: "35px", md: "71px" }}
            fontSize={{ base: "16px", md: "24px" }}
            backgroundColor='#186F45'
            color='#FFFFFF'
          >
            Coloque sua saúde mental em dia
          </Button>
          <Button
            display={{ base: "flex", md: "none" }}
            w={{ base: "232px", md: "440px" }}
            h={{ base: "35px", md: "71px" }}
            fontSize={{ base: "16px", md: "24px" }}
            backgroundColor='#186F45'
            color='#FFFFFF'
          >
            Comece a cuidar de você!
          </Button>
        </Flex>
      </Box>
      <Box backgroundColor='#E5E5E5'>
        <Flex flexDir='column'>
          <Flex
            display={{ base: "block", md: "flex" }}
            mt={{ base: "24px", md: "40px" }}
            borderBottom='1px solid #0B0755'
            paddingBottom='8px'
            w={{ base: "180px", md: "306px" }}
            mx='auto'
            textAlign='center'
            fontSize={{ base: "24px", md: "40px" }}
            justifyContent='center'
          >
            <Heading
              mr='5px'
              fontSize={{ base: "24px", md: "40px" }}
              color='#0B0755'
            >
              Planos
            </Heading>
            <Heading fontSize={{ base: "24px", md: "40px" }} color='#1672F9'>
              Flexíveis
            </Heading>
          </Flex>

          <Text
            textAlign='center'
            fontSize={{ base: "14px", md: "20px" }}
            color='#0B0755'
          >
            Escolha o plano que cabe no seu bolso
          </Text>
        </Flex>
        <Flex>
          <Flex
            mb={{ base: "16px", md: "80px" }}
            mt='40px'
            mx='auto'
            backgroundColor='#E5E5E5'
            alignItems='center'
            justifyContent='space-between'
            flexDir={{ base: "column", md: "row" }}
            w='1120px'
          >
            <Item2
              desc1='Este plano tem esse detalhe'
              desc2='Este plano tem esse detalhe'
              desc3='Este plano tem esse detalhe'
              desc4='Este plano tem esse detalhe'
              fontColor='#0B0755'
              bgColor='#FFFFFF'
              fontColorButton='white'
              bgColorButton='#0B0755'
              title='Plano 1'
              img={quadrado}
              preco='R$ XX,XX'
            />
            <Item2
              desc1='Este plano tem esse detalhe'
              desc2='Este plano tem esse detalhe'
              desc3='Este plano tem esse detalhe'
              desc4='Este plano tem esse detalhe'
              bgColorButton='white'
              fontColorButton='#0B0755'
              fontColor='#FFFFFF'
              bgColor='#0B0755'
              title='Plano 2'
              img={quadrado}
              preco='R$ XX,XX'
            />
            <Item2
              desc1='Este plano tem esse detalhe'
              desc2='Este plano tem esse detalhe'
              desc3='Este plano tem esse detalhe'
              desc4='Este plano tem esse detalhe'
              fontColor='#0B0755'
              bgColor='#FFFFFF'
              fontColorButton='white'
              bgColorButton='#0B0755'
              title='Plano 3'
              img={quadrado}
              preco='R$ XX,XX'
            />
          </Flex>
        </Flex>
      </Box>

      <Box bgColor='#F4F7FD'>
        <Flex flexDir='column'>
          <Flex justifyContent='center' mt='40px'>
            <Heading
              fontSize={{ base: "18px", md: "32px" }}
              textAlign='center'
              color='#0B0755'
            >
              Veja o que nossos clientes acham
            </Heading>
          </Flex>

          <Flex
            alignItems='center'
            justifyContent='space-between'
            flexDir='column'
          >
            <P4
              desc='“Eu gostei desta forma de atendimento, é muito adulto!”'
              desc1='Paulo Jackson - Front End @ Ifood Brasil'
              reverse={{ base: "column", md: "row" }}
            />
            <P4
              desc='“Eu gostei desta forma de atendimento, é muito adulto!”'
              desc1='Paulo Jackson - Front End @ Ifood Brasil'
              reverse={{ base: "column", md: "row-reverse" }}
            />
            <P4
              desc='“Eu gostei desta forma de atendimento, é muito adulto!”'
              desc1='Paulo Jackson - Front End @ Ifood Brasil'
              reverse={{ base: "column", md: "row" }}
            />
            <Flex />
            <Button
              display={{ base: "none", md: "flex" }}
              mt={{ base: "40px", md: "124px" }}
              bgColor='#186F45'
              w={{ base: "232px", md: "440px" }}
              h={{ base: "35px", md: "80px" }}
              color='#FFFFFF'
              fontSize={{ base: "16px", md: "24px" }}
              mb={{ base: "16px", md: "80px" }}
            >
              Coloque sua saúde mental em dia
            </Button>

            <Button
              display={{ base: "flex", md: "none" }}
              mt={{ base: "40px", md: "124px" }}
              bgColor='#186F45'
              w={{ base: "232px", md: "440px" }}
              h={{ base: "35px", md: "80px" }}
              color='#FFFFFF'
              fontSize={{ base: "16px", md: "24px" }}
              mb={{ base: "16px", md: "80px" }}
            >
              Comece a cuidar de você!
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box p='24px 24px'>
        <Flex flexDir='column' alignItems='center'>
          <Flex
            mt={{ base: "0px", md: "50px" }}
            borderBottom='1px solid #0B0755'
            paddingBottom='8px'
            w={{ base: "100%", md: "346px" }}
            justifyContent='center'
          >
            <Heading
              mr='5px'
              fontSize={{ base: "24px", md: "40px" }}
              color='#0B0755'
            >
              Perguntas
            </Heading>
            <Heading fontSize={{ base: "24px", md: "40px" }} color='#1672F9'>
              Frequentes
            </Heading>
          </Flex>

          <Text fontSize={{ base: "13px", md: "20px" }} color='#0B0755'>
            Ficou com alguma dúvida? A gente te responde...
          </Text>
        </Flex>
        <Flex
          alignItems='center'
          flexDir='column'
          mx='auto'
          mt={{ base: "22px", md: "91px" }}
        >
          <Faqpage
            title='Quais são as principais formas de pagamento?'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, faucibus ut neque quisque mi condimentum urna varius. Pellentesque bibendum aliquam risus adipiscing id elementum. Porttitor augue eget nulla ut nulla magna ac nunc tempor.'
          />
          <Faqpage
            title='Quais são as principais formas de pagamento?'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, faucibus ut neque quisque mi condimentum urna varius. Pellentesque bibendum aliquam risus adipiscing id elementum. Porttitor augue eget nulla ut nulla magna ac nunc tempor.'
          />
          <Faqpage
            title='Quais são as principais formas de pagamento?'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, faucibus ut neque quisque mi condimentum urna varius. Pellentesque bibendum aliquam risus adipiscing id elementum. Porttitor augue eget nulla ut nulla magna ac nunc tempor.'
          />
          <Faqpage
            title='Quais são as principais formas de pagamento?'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, faucibus ut neque quisque mi condimentum urna varius. Pellentesque bibendum aliquam risus adipiscing id elementum. Porttitor augue eget nulla ut nulla magna ac nunc tempor.'
          />
          <Button
            display={{ base: "flex", md: "none" }}
            mt={{ base: "40px", md: "124px" }}
            bgColor='#186F45'
            w={{ base: "232px", md: "440px" }}
            h={{ base: "35px", md: "80px" }}
            color='#FFFFFF'
            fontSize={{ base: "16px", md: "24px" }}
            mb={{ base: "28px", md: "80px" }}
          >
            Comece a cuidar de você!
          </Button>
          <Button
            display={{ base: "none", md: "flex" }}
            mt={{ base: "40px", md: "124px" }}
            bgColor='#186F45'
            w={{ base: "232px", md: "440px" }}
            h={{ base: "35px", md: "80px" }}
            color='#FFFFFF'
            fontSize={{ base: "16px", md: "24px" }}
            mb={{ base: "28px", md: "80px" }}
          >
            Coloque sua saúde mental em dia
          </Button>
        </Flex>
      </Box>
      <Box bgColor='#F4F7FD'>
        <Flex alignItems='center' flexDir='column'>
          <Flex justifyContent='center' mt={{ base: "16px", md: "80px" }}>
            <Heading fontSize={{ base: "18px", md: "32px" }} color='#0B0755'>
              Conheça nossos projetos
            </Heading>
          </Flex>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            mb={{ base: "24px", md: "48px" }}
            w={{ base: "100%", md: "1210px" }}
            mt={{ base: "24px", md: "88px" }}
            justifyContent='space-between'
            alignItems={{ base: "center", md: "none" }}
          >
            <Ultpage
              img={pcdev}
              width={{ base: "151px", md: "253px" }}
              high={{ base: "119px", md: "205px" }}
              marginb={{ base: "70px", md: "80px" }}
              desc='Conheça nossa plataforma de “crowdfunding”'
              title='A devakinha é a plataforma focada para dar uma força para você que
            precisa de um empurrão pra começar!'
            />
            <Ultpage
              clean={{ base: "none", md: "block" }}
              img={jobdev}
              width='271px'
              high='166px'
              reverse='row-reverse'
              marginb='37px'
              title='A devsAcreditar acredita que agregar conhecimento é ideal para sua
              evolução profissional'
              desc='Workshops focados para sua área e seu perfil profissional.'
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
export default Home;
