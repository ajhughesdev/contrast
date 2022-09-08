import { ReactComponent as Google } from '../assets/google.svg'
import { ReactComponent as Discord } from '../assets/discord.svg'
import { ReactComponent as Slack } from '../assets/slack.svg'
import { ReactComponent as Twitter } from '../assets/twitter.svg'

const UsedBy = () => {
  return (
    <div className='used-by'>
      <p>Used by individuals in:</p>
      <div className='used-by_logos'>
        <Google />
        <Discord />
        <Slack />
        <Twitter />
      </div>
    </div>
  )
}
export default UsedBy
