import { FETCHCOURSELIST } from '../types'
import { createAction } from 'redux-actions'
import { fetchCourseList } from '../../servers/course'
export const fetchCourse = createAction(FETCHCOURSELIST, () => {
	return fetchCourseList().then(data => data.data)
})