import Grid from "../components/Grid";
import Heading from "../components/Heading";
import Image from "../components/Image";
import Text from "../components/Text";
import { ImageType } from "../enum";

export default function Main() {
    return (
        <Grid rowGap="70px">
            <Grid backgroundColor="gray-000">
                <Grid 
                    margin="0 auto"
                    width="1160px"
                    height="400px" 
                    gridAutoFlow="column"
                    justifyContent="space-between"
                >
                    <Grid rowGap="40px" padding="70px 0 74px 0">
                        <Grid rowGap="6px">
                            <Heading
                                fontSize="40px"
                                lineHeight="55px"
                            >
                                스터딧에서<br />
                                스터디 IT 해보세요
                            </Heading>
                            <Text
                                color="gray-600"
                                fontSize="16px"
                                lineHeight="26px"
                            >
                                기획자, 개발자, 디자이너를 위한<br />
                                IT 스터디 플랫폼
                            </Text>
                        </Grid>
                        <div>
                            <button>안녕</button>
                        </div>
                    </Grid>
                    <Grid padding="">
                        <Image type={ImageType.MAIN_IMG_01} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                안녕하세요
            </Grid>
        </Grid>
    )
}