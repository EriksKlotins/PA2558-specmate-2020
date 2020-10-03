package org.json;

import java.text.ParseException;

/**
 * The JSONException is thrown by the JSON.org classes when things are amiss.
 *
 * @author JSON.org
 * @version 2014-05-03
 * Updated 2020-10-03 by umma19 to remove run time exception code smell.
 */
public class JSONException extends ParseException {
    private static final long serialVersionUID = 0;
    private Throwable cause;

    /**
     * Constructs a JSONException with an explanatory message.
     *
     * @param message
     *            Detail about the reason for the exception.
     */
    public JSONException(String message) {
        super(message,0);
    }

    /**
     * Constructs a new JSONException with the specified cause.
     * @param cause The cause.
     */
    public JSONException(Throwable cause) {
        super(cause.getMessage(),0);
        this.cause = cause;
    }

    /**
     * Returns the cause of this exception or null if the cause is nonexistent
     * or unknown.
     *
     * @return the cause of this exception or null if the cause is nonexistent
     *          or unknown.
     */
    @Override
    public Throwable getCause() {
        return this.cause;
    }
}
