import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

import './styles.scss'

import Header from './components/Header'
import Post from './components/Post'

class App extends Component {
  state = {
    posts: [
      {
        name: 'Lucas Lima',
        avatar:
          'https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-1/p160x160/59022737_2193824010705295_8490058267152613376_n.jpg?_nc_cat=110&_nc_ht=scontent.fsjk2-1.fna&oh=2035bbdabeb7119b76f94ac355084761&oe=5D754C8E',
        date: '14 dias',
        content:
          'Lorem ipsum pulvinar ut nulla urna et litora eu amet, nisl faucibus velit pellentesque auctor fames est tincidunt morbi sapien, eget vehicula porttitor suscipit fusce neque auctor vehicula. ullamcorper aliquam rutrum leo dolor facilisis viverra pulvinar, suscipit nullam lobortis duis nostra dolor donec purus, cras faucibus habitant tempus curabitur conubia. eget ligula ut interdum pellentesque ipsum gravida vitae netus in, aliquam mollis curae ad mauris velit ac lectus vivamus, condimentum nisl metus duis a curae vestibulum mollis. nec dictum vivamus nisi non at conubia velit justo, nostra facilisis vel curabitur ultricies pulvinar vivamus semper, class bibendum nam ac rhoncus senectus habitasse. '
      },
      {
        name: 'Diego Rocketseat',
        avatar:
          'https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-1/p100x100/52944406_2136798736413434_9173506689159135232_n.jpg?_nc_cat=105&_nc_ht=scontent.fsjk2-1.fna&oh=75bc70a2362b6612ca97ea930e6d9fc6&oe=5D329FE0',
        date: '16 dias',
        content:
          'Placerat tempus tortor ad lacinia tempor id, enim nunc varius tellus orci. ullamcorper vehicula eleifend in torquent vulputate cursus quisque suspendisse pharetra venenatis quisque, pharetra sollicitudin non taciti felis phasellus vestibulum etiam eros sapien luctus aliquam, vitae nostra augue pharetra vestibulum volutpat aenean conubia enim ornare. ut nullam aliquet massa sociosqu primis metus aenean blandit in eget, id fermentum erat dolor consectetur taciti tempor scelerisque vivamus, diam eros magna proin curae non cursus dapibus condimentum. vivamus urna auctor etiam habitasse dictum nisl, habitant velit suspendisse massa dolor in, dictumst ultricies risus amet volutpat. '
      }
    ]
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="contentH centerH">
          <Post posts={this.state.posts} />
        </div>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
