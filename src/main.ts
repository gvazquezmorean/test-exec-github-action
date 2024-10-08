import * as core from '@actions/core'
import * as exec from '@actions/exec'
import { wait } from './wait'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Waiting ${ms} milliseconds ...`)

    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    const executionOptions = {
      ignoreReturnCode: true,
      env: { SONATYPE_INTERNAL_CLIENT_NAME: 'Github_Actions' }
    }
    const command =
      'java -jar dist/word-printer-1.0-SNAPSHOT.jar -a admin:admin123. --url http://localhost:8080/word-printer/word-printer/word-printer --exclude-modules  src/main/java/com/wordprinter/wordprinter/WordPrinter.java --exclude-modules  src/main/java/com/wordprinter/wordprinter/WordPrinter.java --exclude-modules  src/main/java/com/wordprinter/wordprinter/WordPrinter.java --exclude-modules  src/main/java/com/wordprinter/wordprinter/WordPrinter.java --exclude-modules  src/main/java/com/wordprinter/wordprinter/WordPrinter.java'
    exec.exec(command, [], executionOptions)

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
