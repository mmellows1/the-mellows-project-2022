import Heading from "@tmp/components/heading";
import Grid from "@tmp/components/grid";

export default () => (
    <div className="md:col-span-2">
        <Grid container sm={2} md={4} gap={8}>
            <div className="md:col-span-2">
                123
            </div>
            <Grid item sm={2} md={4}>
                123
            </Grid>
            <Grid item sm={2} md={2}>
                123
            </Grid>
            <Grid item>
                123
            </Grid>
        </Grid>
    </div>
)