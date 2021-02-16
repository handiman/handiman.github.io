import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DefaultLayout as Component } from '.';
import { Page } from '../components';
import { Container, Paper } from '@material-ui/core';

export default {
  title: 'Layouts',
  component: Component
} as Meta;

const Template: Story = () => (
  <Component>
    <Page centerVertically>
      <Container>
        <header>Lorem ipsum dolor sit amet</header>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed nibh pellentesque, porttitor dolor nec, vestibulum mauris. Curabitur fermentum vehicula mollis. Nullam elit libero, hendrerit eu pharetra at, auctor ut enim. Vestibulum finibus ac dolor eu posuere. Ut tincidunt vitae felis sit amet aliquam. Phasellus vehicula posuere nisi, in auctor nulla sagittis et. Integer sed scelerisque mauris. Donec vitae dignissim ex. Proin consequat erat sit amet nibh semper, vel fringilla erat semper. Cras at massa ac urna venenatis laoreet at at odio. Fusce metus libero, facilisis blandit tincidunt et, lacinia sollicitudin quam. Mauris consequat dapibus volutpat. Etiam dignissim in enim nec rutrum. Donec semper tristique augue, sit amet rutrum quam porttitor a. Cras sem enim, varius ac turpis et, accumsan elementum libero.</div>
      </Container>
    </Page>
    <Page centerVertically component={Paper}>
      <Container>
        <p>Duis ultrices orci vitae magna gravida, a pulvinar sapien suscipit. Mauris nibh mi, tincidunt accumsan libero id, egestas tempor nulla. Cras faucibus enim a elit cursus, in cursus leo convallis. Nunc sed tortor convallis, pretium orci in, tempor tellus. Duis diam mauris, ultrices non tortor sit amet, suscipit ullamcorper metus. Maecenas lobortis euismod magna, sed congue massa rutrum nec. Nulla consectetur luctus erat a ullamcorper. Phasellus semper dolor eros, eget varius mauris mattis in. Maecenas ultricies dignissim tellus, ac placerat felis pharetra nec. Quisque congue orci arcu, sed cursus nunc egestas eu.</p>
        <p>Nam a nisi ut velit maximus maximus. Nam erat mi, imperdiet sit amet lacus non, ultricies hendrerit sapien. Curabitur nisl nibh, sollicitudin nec dolor non, posuere convallis leo. Mauris lacinia non augue sed accumsan. Aenean efficitur risus risus, a finibus lacus rutrum sit amet. Praesent ullamcorper urna ac quam egestas, nec iaculis ligula tempor. Quisque volutpat est commodo dictum semper. Vestibulum eget justo eu erat euismod porta. Morbi scelerisque eros in commodo venenatis. Mauris sed mauris suscipit, efficitur elit ac, accumsan mi.</p>
      </Container>
    </Page>
    <Page centerVertically component={Paper}>
      <Container>
        <p>Nullam vel eros vitae ligula ultricies ultricies vel vel lectus. Mauris euismod iaculis purus eget sagittis. Quisque pharetra vitae sapien et tempor. Sed at tortor tristique, lacinia arcu sed, pulvinar nisl. Donec mauris ipsum, rutrum a arcu ac, commodo facilisis nibh. Ut viverra lobortis mollis. Pellentesque bibendum, risus eget cursus blandit, est nulla condimentum est, vel ultrices odio mi vel quam. Donec id congue metus. Proin sit amet consectetur augue. Sed luctus venenatis leo. Phasellus ac venenatis odio. Praesent et turpis malesuada, pellentesque risus sit amet, ullamcorper magna.</p>
        <p>Ut vel eros quis ligula venenatis pretium. Cras sed erat in nisl maximus pulvinar eu id neque. Etiam sem erat, interdum vel rutrum ut, suscipit at arcu. Donec volutpat elit ut tempor mollis. Integer scelerisque nunc lorem, vel pharetra velit luctus eget. Pellentesque efficitur ullamcorper fermentum. Aliquam lorem neque, euismod nec gravida id, convallis nec arcu. Sed consequat lectus et velit faucibus porta. Quisque vitae ipsum eu justo efficitur ultricies et et libero. Suspendisse dolor nunc, fermentum id fringilla sed, accumsan id felis. Sed congue feugiat tortor, et gravida sapien venenatis rhoncus. Morbi sagittis nisi vel sagittis tempus. Vivamus vulputate accumsan laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec a sodales urna. Nulla posuere odio hendrerit faucibus suscipit.</p>
      </Container>
    </Page>
  </Component>
);

export const DefaultLayout = Template.bind({});