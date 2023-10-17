import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Grid,Container, Divider,Icon,Image,Dimmer,Loader,Segment,Button,Search,Placeholder, List} from "semantic-ui-react"

function App(){

    return (
  <div style={{margin:"10px"}}>
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>

      <Grid.Column verticalAlign='middle'>
        <Container textAlign="center">
        <Icon name="search" size="huge"/>
        <h1>Cari Dokument</h1>
        <Search icon='search' placeholder='Search Document' borderRadius="10px" />
        </Container>
      </Grid.Column>
      <Grid.Column>
      <Container textAlign="center">
        <Icon name="file pdf outline" size="huge"/>
        <h1>Tambah Dokumen Baru</h1>
        <Button content='Create Document' size='big' primary />

        </Container>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
    <br/>
    <Grid>
      <Grid.Column width={5}>
    <Segment>
<Placeholder>
   <Placeholder.Header image>
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Header>
   <Placeholder.Paragraph>
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Paragraph>
 </Placeholder>
</Segment>

      </Grid.Column>
      <Grid.Column width={7}>
    <Segment>
<Placeholder>
   <Placeholder.Header image>
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Header>
   <Placeholder.Paragraph>
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
     <Placeholder.Line />
   </Placeholder.Paragraph>
 </Placeholder>
</Segment>

      </Grid.Column>
      <Grid.Column width={3}>
        <h1>Website Terkait</h1>
      <List>
      <List.Item
      icon='linkify'
      content={<a href='http://www.Google.com'>Google</a>}
    />
       <List.Item
      icon='linkify'
      content={<a href='http://www.facebook.com'>Facebook</a>}
    />
       <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>Semantic UI</a>}
    />
       <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>Niomic</a>}
    />
    <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>React</a>}
    />
  </List>
</Grid.Column>

      </Grid>

    </div>
  );
}

export default App;
