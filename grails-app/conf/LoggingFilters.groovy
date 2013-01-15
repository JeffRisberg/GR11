import java.text.DateFormat
import java.text.SimpleDateFormat

/**
 * The <i>LoggingFilters</i> class is a simple version of request logging
 *
 * @author Jeff Risberg, Spoorthy Ananthaiah
 * @since 10/16/10
 */
class LoggingFilters {

  def filters = {
    all(controller:'*', action:'*') {
      before = {
        Date now = new Date()
        DateFormat dateF = new SimpleDateFormat("MM/dd/yy hh:mm:ss")

        String firstLetter = controllerName?.substring(0, 1)?.toUpperCase()
        String restLetters = controllerName?.substring(1)
        String controllerFullName = "com.vivecoach.${firstLetter}${restLetters}Controller"
        println "---> " + dateF.format(now) + " " + controllerFullName + " " + actionName + " " + request.getMethod()
      }
      after = {
        Date now = new Date()
        DateFormat dateF = new SimpleDateFormat("MM/dd/yy hh:mm:ss")

        String firstLetter = controllerName?.substring(0, 1)?.toUpperCase()
        String restLetters = controllerName?.substring(1)
        String controllerFullName = "com.vivecoach.${firstLetter}${restLetters}Controller"
        println "<--- " + dateF.format(now) + " " + controllerFullName + " " + actionName
      }
      afterView = {
      }
    }
  }
}
