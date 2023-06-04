{/* <Box alignContent="center">

<Box textStyle="landingPageContent" mb={10} pb={0}>

  <Text textStyle="content"><font color="#010332">

    Edit this with a more solid description stating benefits of the membership mint

  </font> </Text>

  <Text textStyle="content"><font color="#010332">
    <span style={{ fontWeight: "400" }}><Center><Heading><Link href="#">Mint a Membership to your favorite gallery</Link></Heading></Center> <Spacer />

      Mint MemberShip To this Art Gallery with a phsycal pass <h1>EDIT:  </h1>

      <Spacer /> Further Explain Membership privelages </span> <Spacer /> Price and amount of Memberships in existence
    <Spacer />
    Benefits after mint <span style={{ fontWeight: "400" }}><Link href='about'> Member benefits token gated functions </Link>...</span>
  </font>

    <Center>
      <MBV />
    </Center>

    <Center>


      <h1>Advertisement Video</h1>
      <video
        className={styles.aboutTrailer}
        src="videos/circles.mp4" 
        alt="generations"
        controls
        objectfit="cover"
        layout="fill"
      />



    </Center>
    
    <Link href="#">See more ...</Link>
  </Text>


  <Text textStyle="content">
    <span style={{ fontWeight: "400" }}>
      <Heading pt={20}><Link href="#">Please Read Whitepaper</Link> </Heading>

      <Spacer />
      <Center>
        <Text>After Reading Whitepaper feel free to ask our AI chat bot anything </Text>
        <Spacer />
        <Textarea status="secondary"
          placeholder="Enter a prompt"
          onChange={(e) => setPrompt(e.target.value)}
          row="5"
          cols="50"

        />
        <Button onClick={getResponseFromOpenAI}>
          Get Response
        </Button>

        <div>
          {isLoading ? (
            <div>Waiting for response ...</div>
          ) : (
            <div>{response}</div>
          )}
        </div>
      </Center>
    </span>
  </Text>

</Box>
</Box> */}