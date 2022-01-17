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
import imgdevs from "../images/imgdevs.png";
import doutoradevs from "../images/doutoradevs.png";
import pcdevs from "../images/pcdevs.png";
import devsdevs from "../images/devsdevs.png";
import tesouradev from "../images/tesouradev.png";
import relogiodev from "../images/relogiodev.png";
import livrodev from "../images/livrodev.png";
import quadrado from "../images/quadrado.png";
import devsorri from "../images/devsorri.png";
import pcdev from "../images/pcdev.png";
import jobdev from "../images/jobdev.png";
function Botao({ desc, width, mtop, mbot }) {
  return (
    <Button
      mt={mtop}
      mb={mbot}
      fontSize={{ base: "16px", md: "24px" }}
      bgColor='#2BB070'
      color='white'
      w={width}
      h={{ base: "35px", md: "71px" }}
    >
      {desc}
    </Button>
  );
}
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
function Cf({ desc, title, width, value, mb }) {
  return (
    <Flex
      mb={mb}
      alignItems='center'
      justifyContent='space-between'
      w={{ base: "100%", md: "1280px" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Flex flexDir='column' w={width}>
        <Heading
          fontWeight='700'
          mb='16px'
          fontSize={{ base: "14px", md: "28px" }}
          color='#0B0755'
        >
          {title}
        </Heading>
        <Text
          textAlign='justify'
          fontSize={{ base: "16px", md: "21px" }}
          color='#0B0755'
        >
          {desc}
        </Text>
      </Flex>
      <Flex
        mt='16px'
        alignItems='center'
        justifyContent='center'
        fontSize={{ base: "20px", md: "40px" }}
        color='white'
        w={{ base: "155px", md: "265px" }}
        h={{ base: "56px", md: "96px" }}
        bgColor='#3182CE'
        rounded='lg'
        fontWeight='700'
      >
        R$ {value}
      </Flex>
    </Flex>
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
            <Heading fontSize={{ base: "18px", md: "40px" }} color='#3182CE'>
              Suporte Psicológico
            </Heading>
            <Heading
              color='#0B0755'
              fontSize={{ base: "18px", md: "40px" }}
              w={{ base: "234px", md: "423px" }}
            >
              para Pessoas de Tecnologia
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
            <Botao
              width={{ base: "100%", md: "423px" }}
              desc='Comece a cuidar de você!'
              mtop={{ base: "16px", md: "24px" }}
              mbot={{ base: "16", md: "116" }}
            />
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
          borderBottom={{ base: "none", md: "1px solid #0B0755" }}
          paddingBottom='8px'
          w={{ base: "100%", md: "628px" }}
          justifyContent='center'
          mx='auto'
        >
          <Heading
            mr='6px'
            textAlign='center'
            fontSize={{ base: "18px", md: "32px" }}
            color='#0B0755'
            mt='40px'
          >
            O que é o
          </Heading>
          <Heading
            mt='40px'
            fontSize={{ base: "18px", md: "32px" }}
            color='#3182CE'
          >
            plano de suporte psicológico?
          </Heading>
        </Flex>
        <Flex
          alignItems='center'
          p={{ base: "24px 24px", md: "45px 142px" }}
          flexDir='column'
        >
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
          <Flex
            borderBottom={{ base: "none", md: "1px solid #0B0755" }}
            paddingBottom='8px'
            w={{ base: "100%", md: "456px" }}
            justifyContent='center'
            mx='auto'
          >
            <Heading
              mr='6px'
              textAlign='center'
              color='#0B0755'
              fontSize={{ base: "18px", md: "32px" }}
              bgColor='#F4F7FD'
            >
              Quais os principais
            </Heading>
            <Heading color='#3182CE' fontSize={{ base: "18px", md: "32px" }}>
              benefícios?
            </Heading>
          </Flex>
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
          <Botao
            width={{ base: "232", md: "423px" }}
            desc='Coloque sua saúde mental em dia'
          />
        </Flex>
      </Box>
      <Box backgroundColor='white'>
        <Flex padding={{ base: "16px 39px", md: "none" }} flexDir='column'>
          <Flex
            mt={{ base: "24px", md: "40px" }}
            borderBottom={{ base: "none", md: "1px solid #0B0755" }}
            paddingBottom='8px'
            w={{ base: "100%", md: "306px" }}
            mx='auto'
            textAlign='center'
            fontSize={{ base: "24px", md: "40px" }}
            justifyContent='center'
          >
            <Heading
              mr='5px'
              fontSize={{ base: "18px", md: "40px" }}
              color='#0B0755'
            >
              Como
            </Heading>
            <Heading fontSize={{ base: "18px", md: "40px" }} color='#1672F9'>
              Funciona
            </Heading>
          </Flex>
          <Text
            textAlign='center'
            fontSize={{ base: "14px", md: "20px" }}
            color='#0B0755'
            mb='49px'
          >
            Sua saúde mental em dia em duas etapas
          </Text>
          <Flex
            justifyContent='space-between'
            flexDir='column'
            alignItems='center'
          >
            <Cf
              value='XXX,XX'
              title='Sessão de avaliação'
              desc='Uma sessão para identificar o que te causa desconforto emocional, como você pode trabalhar isso junto com
              o psicólogo, o que pode ser feito para melhor suprir suas necessidades durante o acompanhamento e como isso pode
              impactar positivamente na sua vida'
              width={{ base: "100%", md: "620px" }}
              mb='120px'
            />
            <Cf
              title='Acompanhamento Psicológico'
              desc='Você terá consultas semanais com todo o suporte através de vídeo chamadas para que você consiga identificar e tratar
              o que lhe causa desconforto. O acompanhamento conta com receitas digitais para facilitar o tratamento.'
              width={{ base: "100%", md: "620px" }}
              value='XXX,XX'
            />
          </Flex>
        </Flex>
        <Flex justifyContent='center'>
          <Botao
            width={{ base: "220px", md: "440px" }}
            desc='Quero começar agora!'
            mtop='48px'
            mbot='40px'
          />
        </Flex>
      </Box>

      <Box bgColor='#F4F7FD'>
        <Flex flexDir='column'>
          <Flex
            alignItems='center'
            mt={{ base: "24px", md: "40px" }}
            w={{ base: "100%", md: "706px" }}
            borderBottom={{ base: "none", md: "1px solid #0B0755" }}
            paddingBottom='8px'
            mx='auto'
            flexDir={{ base: "column", md: "row" }}
            justifyContent='center'
          >
            <Heading
              fontSize={{ base: "18px", md: "32px" }}
              textAlign='center'
              color='#0B0755'
              mr={{ base: "none", md: "8px" }}
            >
              Em dúvida? Veja o que dizem
            </Heading>
            <Heading color='#3182CE' fontSize={{ base: "18px", md: "32px" }}>
              nossos clientes
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
            <Botao
              width={{ base: "232px", md: "423px" }}
              desc='Comece a cuidar de você!'
              mtop='80px'
              mbot='40px'
            />
            <Flex />
          </Flex>
        </Flex>
      </Box>
      <Box p='24px 24px'>
        <Flex flexDir='column' alignItems='center'>
          <Flex
            mt={{ base: "0px", md: "50px" }}
            borderBottom={{ base: "none", md: "1px solid #0B0755" }}
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
          mb={{ base: "none", md: "140px" }}
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
        </Flex>
        <Flex justifyContent='center'>
          <Botao
            desc='Coloque sua saúde mental em dia'
            width={{ base: "281px", md: "440px" }}
            mbot={{ base: "32px", md: "153px" }}
            mtop={{ base: "24px", md: "32px" }}
          />
        </Flex>
      </Box>
      <Box bgColor='#F4F7FD'>
        <Flex alignItems='center' flexDir='column'>
          <Flex justifyContent='center' mt={{ base: "16px", md: "80px" }}>
            <Heading
              mr='8px'
              fontSize={{ base: "18px", md: "32px" }}
              color='#0B0755'
            >
              Conheça nossos
            </Heading>
            <Heading color='#3182CE' fontSize={{ base: "18px", md: "32px" }}>
              projetos
            </Heading>
          </Flex>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            mb={{ base: "24px", md: "48px" }}
            w={{ base: "100%", md: "1280px" }}
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
