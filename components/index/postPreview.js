import styled from 'styled-components'
import global from '../shared/globalVariables'

const PostPreview = ({ date, title, preview }) => (
  <$PostPreview>
    <$Date>{date}</$Date>
    <$TitleAndPreview>
      <$Title>{title}</$Title>
      <$PreviewBody>{preview}</$PreviewBody>
    </$TitleAndPreview>
  </$PostPreview>
)

const $PostPreview = styled.div`
  display: flex;
`

const $TitleAndPreview = styled.div``
const $Title = styled.div``
const $PreviewBody = styled.div``

const $Date = styled.div`
  color: ${global.midGrey};
`

export default PostPreview
