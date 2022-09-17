import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(commentDate) {
      if (!commentDate) {
        return '-'
      }
      return moment(commentDate).fromNow()
    }
  }
}