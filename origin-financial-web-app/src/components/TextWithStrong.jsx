import {styled} from '@mui/system'
import PropTypes from 'prop-types'

const Strong = styled('strong')({
    fontWeight: 600,
})
const TextWithStrong = ({weak, strong}) => <>{weak} <Strong>{strong}.</Strong></>

TextWithStrong.propTypes = {
    weak: PropTypes.string,
    strong: PropTypes.string,
}

export default TextWithStrong
