## Common attributes of cursor-based pagination method parameters

| Parameters | Description | Default value | Errors | Recommendations |
| --- | --- | --- | --- | --- |
| `cursor` | A unique encoded string that serves as a pointer to the next batch of results | The default value is first page | `invalid_cursor` | Do not persist for days! |
| `limit` | A number that tells your method how many results you want per call of the method | You must give a limit | If you exceed the maximum value of the method (usually 1000), the response object will automatically set the parameter as the maximum | 100-200 per call |